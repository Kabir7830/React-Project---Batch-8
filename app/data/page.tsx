"use client"
import { useState, useEffect, ReactNode } from "react";
import Loader from "@/components/Loader";
// Loader Component



interface Product {
  title: String,
  id: number,
  price: number,
  stock: number,
  brand: String
}

export default function ShowData() {
  const [products, setProducts] = useState<[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  async function getData() {
    setLoading(true);
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      const pr = data.products;
      setProducts(pr);
      console.log("Data: ", pr);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  // Filter products based on search
  const filteredProducts = products?.filter((product: Product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    let aValue = a[sortBy];
    let bValue = b[sortBy];

    if (sortBy === "title") {
      aValue = aValue.toLowerCase();
      bValue = bValue.toLowerCase();
    }

    if (sortOrder === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const handleSort = (column: any) => {
    if (sortBy === column) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(column);
      setSortOrder("asc");
    }
  };

  return (
    <>
      {products ?
        <div style={{
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
          minHeight: '100vh',
          background: '#f5f5f5',
          padding: '40px 20px'
        }}>
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            {/* Header */}
            <div style={{
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <h2 style={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: '#000',
                marginBottom: '10px'
              }}>
                Products Data from API
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#666'
              }}>
                Browse our collection of {products.length} products
              </p>
            </div>

            {/* Search Bar */}
            {!loading && (
              <div style={{
                marginBottom: '30px',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{
                    width: '100%',
                    maxWidth: '500px',
                    padding: '14px 20px',
                    fontSize: '16px',
                    border: '2px solid #e0e0e0',
                    borderRadius: '8px',
                    outline: 'none',
                    transition: 'border 0.3s',
                    background: '#fff'
                  }}
                  onFocus={(e) => e.target.style.border = '2px solid #000'}
                  onBlur={(e) => e.target.style.border = '2px solid #e0e0e0'}
                />
              </div>
            )}

            {/* Loading State */}
            {loading ? (
              <Loader />
            ) : (
              <div style={{
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                overflow: 'hidden'
              }}>
                {/* Results Count */}
                <div style={{
                  padding: '20px',
                  borderBottom: '1px solid #e0e0e0',
                  background: '#fafafa'
                }}>
                  <p style={{
                    margin: 0,
                    color: '#666',
                    fontSize: '14px'
                  }}>
                    Showing {sortedProducts.length} of {products.length} products
                  </p>
                </div>

                {/* Table */}
                <div style={{ overflowX: 'auto' }}>
                  <table style={{
                    width: '100%',
                    borderCollapse: 'collapse'
                  }}>
                    <thead>
                      <tr style={{
                        background: '#000',
                        color: '#fff'
                      }}>
                        <th
                          onClick={() => handleSort("id")}
                          style={{
                            padding: '16px',
                            textAlign: 'left',
                            fontWeight: '600',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            transition: 'background 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          ID {sortBy === "id" && (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          onClick={() => handleSort("title")}
                          style={{
                            padding: '16px',
                            textAlign: 'left',
                            fontWeight: '600',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            transition: 'background 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          Product Name {sortBy === "title" && (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                        <th
                          onClick={() => handleSort("price")}
                          style={{
                            padding: '16px',
                            textAlign: 'left',
                            fontWeight: '600',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px',
                            cursor: 'pointer',
                            userSelect: 'none',
                            transition: 'background 0.2s'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.background = '#333'}
                          onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                        >
                          Price {sortBy === "price" && (sortOrder === "asc" ? "↑" : "↓")}
                        </th>
                        <th style={{
                          padding: '16px',
                          textAlign: 'left',
                          fontWeight: '600',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Brand
                        </th>
                        <th style={{
                          padding: '16px',
                          textAlign: 'left',
                          fontWeight: '600',
                          fontSize: '14px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>
                          Stock
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {sortedProducts.length === 0 ? (
                        <tr>
                          <td colSpan="5" style={{
                            padding: '40px',
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '16px'
                          }}>
                            No products found matching "{searchTerm}"
                          </td>
                        </tr>
                      ) : (
                        sortedProducts.map((product: Product, index) => (
                          <tr
                            key={product.id}
                            style={{
                              borderBottom: '1px solid #e0e0e0',
                              transition: 'background 0.2s',
                              background: index % 2 === 0 ? '#fff' : '#fafafa'
                            }}
                            onMouseOver={(e) => e.currentTarget.style.background = '#f0f0f0'}
                            onMouseOut={(e) => e.currentTarget.style.background = index % 2 === 0 ? '#fff' : '#fafafa'}
                          >
                            <td style={{
                              padding: '16px',
                              fontSize: '14px',
                              color: '#666',
                              fontWeight: '600'
                            }}>
                              #{product.id}
                            </td>
                            <td style={{
                              padding: '16px',
                              fontSize: '15px',
                              color: '#000',
                              fontWeight: '500'
                            }}>
                              {product.title}
                            </td>
                            <td style={{
                              padding: '16px',
                              fontSize: '16px',
                              color: '#000',
                              fontWeight: '600'
                            }}>
                              ${product.price}
                            </td>
                            <td style={{
                              padding: '16px',
                              fontSize: '14px',
                              color: '#666'
                            }}>
                              {product.brand || 'N/A'}
                            </td>
                            <td style={{
                              padding: '16px',
                              fontSize: '14px'
                            }}>
                              <span style={{
                                padding: '4px 12px',
                                borderRadius: '12px',
                                fontSize: '12px',
                                fontWeight: '600',
                                background: product.stock > 50 ? '#e6f7e6' : '#fff3e0',
                                color: product.stock > 50 ? '#2e7d32' : '#f57c00'
                              }}>
                                {product.stock} units
                              </span>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
        : ""
      }
    </>
  );
}
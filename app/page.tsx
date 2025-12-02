"use client"
import { useState, useEffect } from "react";
import {Heading, Heading2} from "@/components/Heading";
import { Camera, ArrowRight } from 'lucide-react';
import Button from "@/components/Buttons";
export default function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Welcome to MyCompany",
      subtitle: "Professional Solutions for Modern Business"
    },
    {
      title: "Quality & Excellence",
      subtitle: "Delivering Outstanding Results Every Time"
    },
    {
      title: "Your Success is Our Mission",
      subtitle: "Let's Build Something Great Together"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home">
      {/* Hero Slider */}
      <div style={{
        background: '#000',
        color: '#fff',
        padding: '100px 20px',
        textAlign: 'center',
        minHeight: '400px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <h1 style={{
          fontSize: '48px',
          marginBottom: '20px',
          fontWeight: 'bold',
          transition: 'opacity 0.5s'
        }}>
          {slides[currentSlide].title}
        </h1>
        <p style={{
          fontSize: '24px',
          color: '#999',
          maxWidth: '600px',
          transition: 'opacity 0.5s'
        }}>
          {slides[currentSlide].subtitle}
        </p>

        <div style={{
          display: 'flex',
          gap: '10px',
          marginTop: '30px'
        }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: currentSlide === index ? '#fff' : '#444',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div style={{
        maxWidth: '1200px',
        margin: '80px auto',
        padding: '0 20px'
      }}>
        <h2 style={{
          fontSize: '36px',
          textAlign: 'center',
          marginBottom: '50px',
          color: '#000'
        }}>
          Why Choose Us
        </h2>
        <Heading>This is my default heading</Heading>
        <Heading variant="primary" id="p-heading" onClick={()=>{console.log('hello')}}>This is my primary heading</Heading>
        <Heading variant="secondary" className="text-4xl text-blue-300!">This is my secondary heading</Heading>
        <Heading2 variant="danger">This is my danger heading <ArrowRight color="blue" /></Heading2>
        <Button />

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
        }}>
          <div style={{
            padding: '40px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px'
            }}>⚡</div>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '15px',
              color: '#000'
            }}>Fast & Efficient</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              We deliver high-quality results quickly without compromising on excellence.
            </p>
          </div>

          <div style={{
            padding: '40px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px'
            }}>🎯</div>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '15px',
              color: '#000'
            }}>Precision Focused</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Attention to detail in every project ensures perfect results every time.
            </p>
          </div>

          <div style={{
            padding: '40px',
            border: '1px solid #e0e0e0',
            borderRadius: '8px',
            textAlign: 'center',
            transition: 'transform 0.3s, box-shadow 0.3s',
            cursor: 'pointer'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            <div style={{
              fontSize: '48px',
              marginBottom: '20px'
            }}>🤝</div>
            <h3 style={{
              fontSize: '24px',
              marginBottom: '15px',
              color: '#000'
            }}>Client Centric</h3>
            <p style={{
              color: '#666',
              lineHeight: '1.6'
            }}>
              Your satisfaction is our priority. We work closely with you every step.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
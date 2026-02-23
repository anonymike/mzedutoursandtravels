import Link from 'next/link'

export default function NotFound() {
  return (
    <html>
      <head>
        <title>Page Not Found</title>
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '20px',
          backgroundColor: '#f5f5f5',
        }}>
          <div style={{
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '40px',
            maxWidth: '600px',
            width: '100%',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            textAlign: 'center',
          }}>
            <h1 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#ef4444',
            }}>
              404
            </h1>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '16px',
              color: '#333',
            }}>
              Page Not Found
            </h2>
            <p style={{
              fontSize: '16px',
              color: '#666',
              marginBottom: '32px',
              lineHeight: 1.5,
            }}>
              The page you are looking for might have been removed or is temporarily unavailable.
            </p>
            <Link href="/">
              <button style={{
                padding: '12px 32px',
                fontSize: '16px',
                fontWeight: '600',
                backgroundColor: '#ef4444',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                textDecoration: 'none',
              }}>
                Go Home
              </button>
            </Link>
          </div>
        </div>
      </body>
    </html>
  )
}

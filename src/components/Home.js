import React from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';

const Home = () => {
  const isAuthenticated = authService.isAuthenticated();
  
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem', textAlign: 'center' }}>
      <h1>JWT Auth App</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
        Aplicación de ejemplo para trabajar con autenticación JWT
      </p>
      
      <div style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '8px',
        marginBottom: '2rem'
      }}>
        {isAuthenticated ? (
          <>
            <h2>¡Bienvenido!</h2>
            <p>Ya has iniciado sesión en la aplicación.</p>
            <Link 
              to="/dashboard"
              style={{
                display: 'inline-block',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                marginTop: '1rem'
              }}
            >
              Ir al Dashboard
            </Link>
          </>
        ) : (
          <>
            <h2>Bienvenido a JWT Auth App</h2>
            <p>Inicia sesión para acceder a todas las funcionalidades.</p>
            <Link 
              to="/login"
              style={{
                display: 'inline-block',
                backgroundColor: '#007bff',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '4px',
                padding: '0.5rem 1rem',
                marginTop: '1rem'
              }}
            >
              Iniciar Sesión
            </Link>
          </>
        )}
      </div>
      
      <div style={{ textAlign: 'left' }}>
        <h2>Acerca de esta aplicación</h2>
        <p>
          Esta aplicación de ejemplo muestra cómo implementar autenticación con JWT (JSON Web Tokens) en React.
          Actualmente usa tokens hardcodeados para simulación mientras se desarrolla el backend.
        </p>
        
        <h3>Características:</h3>
        <ul>
          <li>Autenticación simulada con tokens JWT</li>
          <li>Visualización y decodificación de tokens</li>
          <li>Rutas protegidas con control de acceso</li>
          <li>Integración con axios para futuras peticiones al backend</li>
        </ul>
        
        <h3>Acerca de JWT</h3>
        <p>
          JWT (JSON Web Token) es un estándar abierto para crear tokens de acceso que permiten la propagación
          de identidad y privilegios entre cliente y servidor. Un JWT consta de tres partes separadas por puntos:
        </p>
        <ol>
          <li><strong>Header:</strong> Contiene el tipo de token y el algoritmo de firma</li>
          <li><strong>Payload:</strong> Contiene los "claims" o información sobre el usuario y metadatos</li>
          <li><strong>Signature:</strong> Una firma que verifica la autenticidad del token</li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
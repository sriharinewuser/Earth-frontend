
import axios from 'axios'

// Set the baseURL dynamically based on environment
axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:5000/api' // ✅ Local dev backend
    : 'https://your-backend.vercel.app/api'; // ✅ Live backend


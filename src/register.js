import React, { useState } from 'react';
import './register.css';

function Register() {
  const [formData, setFormData] = useState({
    ad: '',
    soyad: '',
    email: '',
    telefon: '',
    sifre: ''
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const { ad, soyad, email, telefon, sifre } = formData;
    if (!ad || !soyad || !email || !telefon || !sifre) {
      alert("Lütfen tüm kutucukları doldurun.");
    } else {
      // Formu gönderme işlemi burada gerçekleştirilebilir
      console.log('Form gönderildi:', formData);
    }
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-header text-center">
              <h3>Üye ol</h3>
            </div>
            <div className="card-body">
              <form id="registerForm" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="ad">Ad:</label>
                  <input type="text" className="form-control" id="ad" value={formData.ad} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="soyad">Soyad:</label>
                  <input type="text" className="form-control" id="soyad" value={formData.soyad} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">E-Posta:</label>
                  <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="telefon">Telefon numarası:</label>
                  <input type="tel" className="form-control" id="telefon" value={formData.telefon} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Cinsiyet:</label>
                  <select className="form-control" id="gender" required>
                    <option value="">Seçiniz</option>
                    <option value="male">Erkek</option>
                    <option value="female">Kadın</option>
                    <option value="other">Diğer</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="sifre">Şifre:</label>
                  <input type="password" className="form-control" id="sifre" value={formData.sifre} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Üye ol</button>
                <div className="text-center mt-3">
                  <p>Zaten hesabın var mı? <a href="login.html">Giriş yap</a></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

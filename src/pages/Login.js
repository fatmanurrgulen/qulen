import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // react-router-dom'dan Link bileşenini ekleyin
import '../styles/login.css';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Basit doğrulama
        if (email === '' || password === '') {
            alert('Lütfen tüm alanları doldurun.');
        } else {
            alert(`Email: ${email}\nPassword: ${password}`);
            // Burada girişi işlemek için daha fazla mantık ekleyebilirsiniz, örn., verileri bir sunucuya göndermek
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-header text-center">
                            <h3>Giriş Yap</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">E-posta</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Şifre</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-right mb-3">
                                    <a href="#" className="text-primary"><small>Şifremi Unuttum?</small></a>
                                    {/* Şifremi unuttum bağlantısına onClick olayı eklendi */}
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Giriş Yap</button>
                                <div className="text-center mt-3">
                                    <p>Henüz hesabın yok mu? <Link to="/register"><b>Üye ol</b></Link></p>
                                    {/* Üye ol bağlantısı <Link> bileşeniyle değiştirildi */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;

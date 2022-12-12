import React, {useState} from 'react';
import './login.css';
import axios from 'axios';


function Login (props) {

    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();

		const login = {
			email: email,
			password: pw,
		}

		try {
			await axios.post(' ', login)
		} catch (catchedError) {
            console.log('error');
		}
	}


    return(
        <form onSubmit={handleSubmit}>
            <div className="loginMenu">       
                <div className="blank"> </div>
                <div>
                    <div className="inputTitle">이메일 주소</div>
                    <div>
                        <input className="input" type="text" 
                        placeholder="이메일 입력" value={email}onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                
                    <div className="inputTitle">비밀번호</div>
                    <div>
                        <input className="input" type="password" 
                        placeholder="비밀번호 입력" value={pw} onChange={(e) => setPw(e.target.value)}/>
                    </div>

                </div>

                <div>
                    <button className="bottomButton" type="submit">
                        로그인
                    </button>
                </div>
            </div>
        </form>
    );



}
export default Login;
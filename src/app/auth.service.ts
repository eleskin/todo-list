import {Injectable} from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  isLoggedIn() {
    return axios
      .get('http://localhost:3000/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then((response) => {
        if (response.status === 200) {
          return true;
        } else {
          localStorage.removeItem('token');
          return false;
        }
      })
      .catch(() => {
        localStorage.removeItem('token');
        return false;
      });
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/user');
    }

    getById(id: number) {
        return this.http.get('/user' + id);
    }

    register(user: User) {
        return this.http.post('/user/register', user);
    }

    update(user: User) {
        return this.http.put('/user' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/user' + id);
    }
}

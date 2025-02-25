import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private URL_USUARIOS = 'http://localhost:8080/api/users';

    constructor(private httpClient: HttpClient) {}

    cadastrar(usuario: User): Observable<User> {
        return this.httpClient.post<User>(this.URL_USUARIOS + '/register', usuario);
    }

    listar(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.URL_USUARIOS);
    }

    buscar(id: number): Observable<User> {
        return this.httpClient.get<User>(this.URL_USUARIOS + '/' + id);
    }

    editar(usuario: User): Observable<User> {
        return this.httpClient.put<User>(
        this.URL_USUARIOS + '/' + usuario.id,
        usuario
        );
    }

    remover(usuario: User): Observable<User> {
        return this.httpClient.delete<User>(
        this.URL_USUARIOS + '/' + usuario.id
        );
    }

    login(email: string, password: string): Observable<any> {
        return this.httpClient.post<any>(this.URL_USUARIOS + '/login', { email, password });
      }


    buscarPorEmail(email: string): Promise<User | null | undefined> {
        return this.httpClient.get<User[]>(this.URL_USUARIOS + '?email=' + email).pipe(
            map((usuarios: User[]) => {
                return usuarios.length > 0 ? usuarios[0] : null;
            })
        ).toPromise();
    }}
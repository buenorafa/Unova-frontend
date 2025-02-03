import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class VendedorService {
    URL_USUARIOS = 'http://localhost:8080/users';

    constructor(private httpClient: HttpClient) {}

    cadastrar(usuario: User): Observable<User> {
        return this.httpClient.post<User>(this.URL_USUARIOS, usuario);
    }

    listar(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.URL_USUARIOS);
    }

    buscar(id: string): Observable<User> {
        return this.httpClient.get<User>(this.URL_USUARIOS + '/' + id);
    }

    editar(usuario: User): Observable<User> {
        return this.httpClient.put<User>(
        this.URL_USUARIOS + '/' + usuario.id,
        User
        );
    }

    remover(User: User): Observable<User> {
        return this.httpClient.delete<User>(
        this.URL_USUARIOS + '/' + User.id
        );
    }

    buscarPorEmail(email: string): Promise<User | null | undefined> {
        return this.httpClient.get<User[]>(this.URL_USUARIOS + '?email=' + email).pipe(
            map((usuarios: User[]) => {
                return usuarios.length > 0 ? usuarios[0] : null;
            })
        ).toPromise();
    }}
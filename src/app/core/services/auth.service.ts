import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ApiService } from './api.service';
import { ApiResponseModel } from '../models/api-response.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly baseUrl: string = 'authentication/';
  private readonly accessTokenName = 'admin_auth_token';
  private readonly refreshTokenName = 'admin_refresh_token';

  constructor(private apiService: ApiService) {}

  isAuthenticated(): boolean {
    return localStorage.getItem(this.accessTokenName) !== null;
  }

  login(data: any): Observable<any> {
    return this.apiService.post(this.baseUrl + 'login', data);
  }

  logout(): void {
    try {
      localStorage.removeItem(this.refreshTokenName);
      localStorage.removeItem(this.accessTokenName);
    } catch (error) {
      console.error('Error during logout:', error);
    }
    window.location.reload();
  }

  getMagicLink(token: string): Observable<ApiResponseModel> {
    return this.apiService.get(this.baseUrl + 'login/callback?token=' + token).pipe(
      tap((response: any) => {
        if (response?.data) {
          this.setTokens(response.data.access_token, response.data.refresh_token);
        }
      }),
    );
  }

  refreshToken(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.apiService.post(this.baseUrl + 'refresh', { refresh_token: refreshToken }).pipe(
      tap((response: any) => {
        if (response?.data) {
          this.setTokens(response.data.access_token, response.data.refresh_token);
        }
      }),
      catchError((error) => {
        this.logout();
        return throwError(() => error);
      }),
    );
  }

  setTokens(accessToken: string | null, refreshToken: string | null) {
    if (accessToken) {
      localStorage.setItem(this.accessTokenName, accessToken);
    }
    if (refreshToken) {
      localStorage.setItem(this.refreshTokenName, refreshToken);
    }
  }

  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenName);
  }

  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenName);
  }
}

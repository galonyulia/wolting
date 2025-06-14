export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  status: number;
}

export class SignInService {
  private baseUrl: string;

  constructor(baseUrl: string = 'https://wolt.com/api/signin') {
    this.baseUrl = baseUrl;
  }

  async getSignInToken(signInRequest: SignInRequest): Promise<SignInResponse> {
    throw new Error('SignIn API implementation not available - placeholder for future API integration');
  }

  async validateToken(token: string): Promise<boolean> {
    throw new Error('Token validation API implementation not available - placeholder for future API integration');
  }
} 

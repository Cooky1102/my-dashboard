interface AuthProvider {
  isAuthenticated: boolean;
  username: null | string;
  checkAuth(): boolean;
  signin(username: string): Promise<void>;
  signout(): Promise<void>;
}

/**
 * This represents some generic auth provider API, like Firebase.
 */
export const fakeAuthProvider: AuthProvider = {
  isAuthenticated: localStorage.getItem("token") !== null,
  username: null,
  checkAuth() {
    return localStorage.getItem("token") !== null;
  },
  async signin(username: string) {
    localStorage.setItem("token", username);
    fakeAuthProvider.username = username;
  },
  async signout() {
    fakeAuthProvider.isAuthenticated = false;
    fakeAuthProvider.username = "";
  },
};

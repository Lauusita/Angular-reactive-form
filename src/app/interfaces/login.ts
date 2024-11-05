import { FormControl } from "@angular/forms";

export interface Login {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface AuthResponse {
  token: string
}
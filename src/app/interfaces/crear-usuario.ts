import { FormControl } from "@angular/forms";

export interface UserFormModel {
  firstName: FormControl<string | null>;
  lastName: FormControl<string | null>;
  id: FormControl<number | null>;
  birthdate: FormControl<string | null>;
  gender: FormControl<string | null>;
  country: FormControl<string | null>;
}

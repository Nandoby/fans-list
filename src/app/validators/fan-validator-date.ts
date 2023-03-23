import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function fanValidatorDate(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const yearInput = new Date(control.value).getFullYear()
    const yearNow = new Date().getFullYear()
    const diff = (yearNow - yearInput) < 13

    return diff ? {diff: true} : null

  }
}


import { emailValidator, passwordValidation} from "./helpers/emailValidator";
import '@testing-library/jest-dom'


it("check email validation for valid email", ()=> {
    let result = emailValidator('abc@gmail.com')
    expect(result).toBe(true)
}); 

it("check email validation for Invalid email", ()=> {
    let result = emailValidator("i.sam@test")
    expect(result).toBe(false)
}); 

it("check email validation for  integer", ()=> {
    let result = emailValidator(123)
    expect(result).toBe(false)
}); 

it("check  password Validation for valid password", ()=> {
    let result = passwordValidation("Laeeq@12345")
    expect(result).toBe(true)
}); 

it("check  password Validation for invalid password (numbers only)", ()=> {
    let result = passwordValidation("12345")
    expect(result).toBe(false)
}); 

it("check  password Validation for invalid password (string character  only)", ()=> {
    let result = passwordValidation("laeeqqrressckmvk")
    expect(result).toBe(false)
}); 

it("check  password Validation for invalid password (less than 5 character)", ()=> {
    let result = passwordValidation("Lae@1")
    expect(result).toBe(false)
}); 
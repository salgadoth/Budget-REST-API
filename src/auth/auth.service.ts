import { Injectable } from "@nestjs/common";

@Injectable({})

export class AuthService{
    signUp(){
        return {msg : 'I am signed up'}
    }
    
    signIn(){
        return {msg : 'I am signed in'}
    }

}
// Nivel 1
export interface Nivel1 {
    col1: string;
    col2: string;
    col3: string;
    // Los datos para el segundo nivel
    children?: Nivel2[];
}

// Nivel 2
export interface Nivel2 {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
    col5: string;
    col6: string;
    // Los datos para el tercer nivel
    children?: Nivel3[];
}

// Nivel 3
export interface Nivel3 {
    col1: string;
    col2: string;
    col3: string;
    col4: string;
}
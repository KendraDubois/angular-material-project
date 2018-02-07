export class Address {
    constructor (
        //? Indicates optional
        public firstname?: string,
        public lastname?: string,
        public address?: string,
        public city?: string,
        public state?: string,
        public postalcode?: string
    ) {}
}
export class CreateManagerDto {
    FullName: string;
    Dni: string;
    Email?: string;
    Phone?: string;
    StartDate?: Date;
    EndDate?: Date;
    Complex: string;
    RoleId: string;
    State: string;
    AdditionalNotes?: string;
    IsActive: boolean;
    DigitalSignature?: Buffer;
}

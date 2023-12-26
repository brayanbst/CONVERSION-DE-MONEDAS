import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from '../../src/auth/auth.service';
import { UsersService } from '../../src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from './../../src/users/user.entity/user.entity';

const mockUsersService = {
    findByEmail: jest.fn().mockResolvedValue({
      id: 1,
      email: 'oecheverria@ecvsoluciones.com',
      password: 'E#a9eeY&AfFrF#9LGdDu^Q34@',
    }),
  };
  
  const mockJwtService = {
    sign: jest.fn().mockReturnValue('token_simulado'),
  };


describe('AuthService', () => {
    let service: AuthService;
    let fakeUsersService: Partial<UsersService>;
    let fakeJwtService: Partial<JwtService>;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
          providers: [
            AuthService,
            { provide: UsersService, useValue: mockUsersService },
            { provide: JwtService, useValue: mockJwtService },
          ],
        }).compile();
    
        service = module.get<AuthService>(AuthService);
      });
    
      it('should be defined', () => {
        expect(service).toBeDefined();
      });

    it('should return a JWT token when login is successful', async () => {
        const user = { email: 'oecheverria@ecvsoluciones.com', password: 'E#a9eeY&AfFrF#9LGdDu^Q34@' };
        expect(await service.login(user)).toEqual({
            access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9lY2hldmVycmlhQGVjdnNvbHVjaW9uZXMuY29tIiwic3ViIjoyLCJpYXQiOjE3MDMyMjI4MDcsImV4cCI6MTcwMzMwOTIwN30.SCLtIbvDb-DpOdFY_Jc28GNGW6H_P-UNhQEcm1VGiEE',
        });
    });
});

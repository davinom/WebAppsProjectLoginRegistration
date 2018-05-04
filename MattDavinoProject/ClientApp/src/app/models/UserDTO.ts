import { PhotoDTO } from "./PhotoDTO";

export interface UserDTO {
  id: number;
  userName: string;
  gender: string;
  age: number;
  name: string;
  created: Date;
  lastActive: Date;
  city: string;
  photoUrl: string;
  introduction?: string;
  lookingFor?: string;
  interests?: string;
  photos?: Array<PhotoDTO>;
}

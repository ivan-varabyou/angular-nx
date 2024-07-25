import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntitiy } from '../entities/user.entitiy'

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(UserEntitiy)
		private readonly userRepository: Repository<UserEntitiy>) {
	}

	async find(): Promise<UserEntitiy[]> {
		return await this.userRepository.find()
	}

	async findOneByUserName(username: string): Promise<UserEntitiy> {
		const users = await this.userRepository.find({where: {username}})
		return users.length === 1 ? users[0] : null
	}

	async createUser(user: Partial<UserEntitiy>): Promise<UserEntitiy> {
		const newUser = await this.userRepository.save(user)
		return this.userRepository.save(newUser)
	}

	async findOneById(id: number): Promise<UserEntitiy | null> {
		return await (this.userRepository.findOne({where: {id}})) || null
	}
}

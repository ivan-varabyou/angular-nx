import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { UserEntity } from '../entities/user.entity'

/**
 * Service for managing users.
 */
@Injectable()
export class UserService {
	/**
	 *   constructor
	 * @param userRepository
	 */
	constructor(
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {
	}

	/**
	 * Retrieves all users from the database.
	 * @returns An array of UserEntity objects.
	 */
	async find(): Promise<UserEntity[]> {
		return await this.userRepository.find()
	}

	/**
	 * Finds a user by their username.
	 * @param username - The username to search for.
	 * @returns The UserEntity if found, or null if not.
	 */
	async findOneByUserName(username: string): Promise<UserEntity | null> {
		const users = await this.userRepository.find({where: {username}})
		return users.length === 1 ? users[0] : null
	}

	/**
	 * Creates a new user in the database.
	 * @param user - The user data to create.
	 * @returns The newly created UserEntity.
	 */
	async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
		const newUser = await this.userRepository.save(user)
		return this.userRepository.save(newUser)
	}

	/**
	 * Finds a user by their ID.
	 * @param id - The user ID to search for.
	 * @returns The UserEntity if found, or null if not.
	 */
	async findOneById(id: number): Promise<UserEntity | null> {
		return await this.userRepository.findOne({where: {id}}) || null
	}
}

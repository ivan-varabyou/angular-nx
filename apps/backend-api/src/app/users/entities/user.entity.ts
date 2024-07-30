import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from 'typeorm'
import { IUser } from '@angular-nx/shared/data-access/interfaces'

@Entity({name: 'users'})
export class UserEntity implements IUser {
	// Auto-generated primary key for the user.
	@PrimaryGeneratedColumn()
	id: number

	// Unique username for the user.
	@Column({length: 50, unique: true})
	username: string

	// Timestamp when the user was created.
	@CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
	created: string

	// Timestamp when the user was last updated.
	@UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
	updated: string

	// User's email address.
	@Column()
	email: string

	// User's hashed password.
	@Column()
	password: string
}
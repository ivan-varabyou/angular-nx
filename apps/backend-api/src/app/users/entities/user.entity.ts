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
	@PrimaryGeneratedColumn()
	id: number

	@Column({length: 50, unique: true})
	username: string

	@CreateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
	created: string

	@UpdateDateColumn({type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP'})
	updated: string

	@Column()
	email: string

	@Column()
	password: string
}
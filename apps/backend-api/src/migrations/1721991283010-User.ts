import { MigrationInterface, QueryRunner } from 'typeorm'

/**
 * Add init user
 * username: admin
 * email: admin@example.com
 * password: root
 */

export class User1721991283010 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
				INSERT INTO users (username, email, password)
				VALUES ('admin', 'admin@example.com', '$2a$10$OYqlVAC21ae4Rd5UDabWcO6/jklBaN8aIiUIbBxGbun1CpE97oqu2')`
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.query(`
			DELETE FROM users WHERE username = 'admin'
		`)
	}

}

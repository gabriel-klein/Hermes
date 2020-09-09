.PHONY: npm up init docker_build down

up:
	docker-compose up -d
	docker-compose logs -f app

npm: 
	docker-compose run --rm app npm i

docker_build:
	docker-compose build

down: 
	docker-compose down

init: docker_build npm up
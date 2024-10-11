# Fitness-Project
This project which include fitness software to help you get fit and strong.


---


## Downloading

Run:

`git clone https://github.com/fibrahim4/Fitness-Project.git`

`cd Fitness-Project`


If you have GNU Make, run:

```
make init
```

Otherwise, run:
`test -d .venv || python3 -m venv .venv`

`./scripts/deps.sh`


## Development

### Migrations

If you have GNU Make, run:

```
make migrate
```

Otherwise, run:

```
./scripts/migrate.sh
```


## Deployment

If you have GNU Make, run:

```
make run
```

Otherwise, run:

```
./scripts/run.sh
```



1.docker
PS C:\Users\Rajeshwary\Desktop\nodedoc> docker

Usage:  docker COMMAND

A self-sufficient runtime for containers

Options:
      --config string      Location of client config files (default
                           "C:\\Users\\Rajeshwary\\.docker")
  -D, --debug              Enable debug mode
  -H, --host list          Daemon socket(s) to connect to
  -l, --log-level string   Set the logging level
                           ("debug"|"info"|"warn"|"error"|"fatal")
                           (default "info")
      --tls                Use TLS; implied by --tlsverify
      --tlscacert string   Trust certs signed only by this CA (default
                           "C:\\Users\\Rajeshwary\\.docker\\machine\\machines\\default\\ca.pem")
      --tlscert string     Path to TLS certificate file (default
                           "C:\\Users\\Rajeshwary\\.docker\\machine\\machines\\default\\cert.pem")
      --tlskey string      Path to TLS key file (default
                           "C:\\Users\\Rajeshwary\\.docker\\machine\\machines\\default\\key.pem")
      --tlsverify          Use TLS and verify the remote (default true)
  -v, --version            Print version information and quit

Management Commands:
  config      Manage Docker configs
  container   Manage containers
  image       Manage images
  network     Manage networks
  node        Manage Swarm nodes
  plugin      Manage plugins
  secret      Manage Docker secrets
  service     Manage services
  swarm       Manage Swarm
  system      Manage Docker
  trust       Manage trust on Docker images
  volume      Manage volumes

Commands:
  attach      Attach local standard input, output, and error streams to a running container
  build       Build an image from a Dockerfile
  commit      Create a new image from a container's changes
  cp          Copy files/folders between a container and the local filesystem
  create      Create a new container
  diff        Inspect changes to files or directories on a container's filesystem
  events      Get real time events from the server
  exec        Run a command in a running container
  export      Export a container's filesystem as a tar archive
  history     Show the history of an image
  images      List images
  import      Import the contents from a tarball to create a filesystem image
  info        Display system-wide information
  inspect     Return low-level information on Docker objects
  kill        Kill one or more running containers
  load        Load an image from a tar archive or STDIN
  login       Log in to a Docker registry
  logout      Log out from a Docker registry
  logs        Fetch the logs of a container
  pause       Pause all processes within one or more containers
  port        List port mappings or a specific mapping for the container
  ps          List containers
  pull        Pull an image or a repository from a registry
  push        Push an image or a repository to a registry
  rename      Rename a container
  restart     Restart one or more containers
  rm          Remove one or more containers
  rmi         Remove one or more images
  run         Run a command in a new container
  save        Save one or more images to a tar archive (streamed to STDOUT by default)
  search      Search the Docker Hub for images
  start       Start one or more stopped containers
  stats       Display a live stream of container(s) resource usage statistics
  stop        Stop one or more running containers
  tag         Create a tag TARGET_IMAGE that refers to SOURCE_IMAGE
  top         Display the running processes of a container
  unpause     Unpause all processes within one or more containers
  update      Update configuration of one or more containers
  version     Show the Docker version information
  wait        Block until one or more containers stop, then print their exit codes

Run 'docker COMMAND --help' for more information on a command.

2.$ docker --config ~/testconfigs/ ps

CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS              PORTS                  NAMES

ac8d18b1bca0        my-nodejs-app       "npm start"         10 minutes ago      Up 10 minutes       0.0.0.0:3000->3000/tcp   my-production-running-app

3. $  docker run --help

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

Run a command in a new container

Options:
      --add-host list                  Add a custom host-to-IP mapping (host:ip)
  -a, --attach list                    Attach to STDIN, STDOUT or STDERR
      --blkio-weight uint16            Block IO (relative weight), between 10 and 1000, or 0 to
                                       disable (default 0)
      --blkio-weight-device list       Block IO weight (relative device weight) (default [])
      --cap-add list                   Add Linux capabilities
      --cap-drop list                  Drop Linux capabilities
      --cgroup-parent string           Optional parent cgroup for the container
      --cidfile string                 Write the container ID to the file
      --cpu-period int                 Limit CPU CFS (Completely Fair Scheduler) period
      --cpu-quota int                  Limit CPU CFS (Completely Fair Scheduler) quota
      --cpu-rt-period int              Limit CPU real-time period in microseconds
      --cpu-rt-runtime int             Limit CPU real-time runtime in microseconds
  -c, --cpu-shares int                 CPU shares (relative weight)
      --cpus decimal                   Number of CPUs
      --cpuset-cpus string             CPUs in which to allow execution (0-3, 0,1)
      --cpuset-mems string             MEMs in which to allow execution (0-3, 0,1)
  -d, --detach                         Run container in background and print container ID
      --detach-keys string             Override the key sequence for detaching a container
      --device list                    Add a host device to the container
      --device-cgroup-rule list        Add a rule to the cgroup allowed devices list
      --device-read-bps list           Limit read rate (bytes per second) from a device (default [])
      --device-read-iops list          Limit read rate (IO per second) from a device (default [])
      --device-write-bps list          Limit write rate (bytes per second) to a device (default [])
      --device-write-iops list         Limit write rate (IO per second) to a device (default [])
      --disable-content-trust          Skip image verification (default true)
      --dns list                       Set custom DNS servers
      --dns-option list                Set DNS options
      --dns-search list                Set custom DNS search domains
      --entrypoint string              Overwrite the default ENTRYPOINT of the image
  -e, --env list                       Set environment variables
      --env-file list                  Read in a file of environment variables
      --expose list                    Expose a port or a range of ports
      --group-add list                 Add additional groups to join
      --health-cmd string              Command to run to check health
      --health-interval duration       Time between running the check (ms|s|m|h) (default 0s)
      --health-retries int             Consecutive failures needed to report unhealthy
      --health-start-period duration   Start period for the container to initialize before starting
                                       health-retries countdown (ms|s|m|h) (default 0s)
      --health-timeout duration        Maximum time to allow one check to run (ms|s|m|h) (default 0s)
      --help                           Print usage
  -h, --hostname string                Container host name
      --init                           Run an init inside the container that forwards signals and
                                       reaps processes
  -i, --interactive                    Keep STDIN open even if not attached
      --ip string                      IPv4 address (e.g., 172.30.100.104)
      --ip6 string                     IPv6 address (e.g., 2001:db8::33)
      --ipc string                     IPC mode to use
      --isolation string               Container isolation technology
      --kernel-memory bytes            Kernel memory limit
  -l, --label list                     Set meta data on a container
      --label-file list                Read in a line delimited file of labels
      --link list                      Add link to another container
      --link-local-ip list             Container IPv4/IPv6 link-local addresses
      --log-driver string              Logging driver for the container
      --log-opt list                   Log driver options
      --mac-address string             Container MAC address (e.g., 92:d0:c6:0a:29:33)
  -m, --memory bytes                   Memory limit
      --memory-reservation bytes       Memory soft limit
      --memory-swap bytes              Swap limit equal to memory plus swap: '-1' to enable
                                       unlimited swap
      --memory-swappiness int          Tune container memory swappiness (0 to 100) (default -1)
      --mount mount                    Attach a filesystem mount to the container
      --name string                    Assign a name to the container
      --network string                 Connect a container to a network (default "default")
      --network-alias list             Add network-scoped alias for the container
      --no-healthcheck                 Disable any container-specified HEALTHCHECK
      --oom-kill-disable               Disable OOM Killer
      --oom-score-adj int              Tune host's OOM preferences (-1000 to 1000)
      --pid string                     PID namespace to use
      --pids-limit int                 Tune container pids limit (set -1 for unlimited)
      --privileged                     Give extended privileges to this container
  -p, --publish list                   Publish a container's port(s) to the host
  -P, --publish-all                    Publish all exposed ports to random ports
      --read-only                      Mount the container's root filesystem as read only
      --restart string                 Restart policy to apply when a container exits (default "no")
      --rm                             Automatically remove the container when it exits
      --runtime string                 Runtime to use for this container
      --security-opt list              Security Options
      --shm-size bytes                 Size of /dev/shm
      --sig-proxy                      Proxy received signals to the process (default true)
      --stop-signal string             Signal to stop a container (default "SIGTERM")
      --stop-timeout int               Timeout (in seconds) to stop a container
      --storage-opt list               Storage driver options for the container
      --sysctl map                     Sysctl options (default map[])
      --tmpfs list                     Mount a tmpfs directory
  -t, --tty                            Allocate a pseudo-TTY
      --ulimit ulimit                  Ulimit options (default [])
  -u, --user string                    Username or UID (format: <name|uid>[:<group|gid>])
      --userns string                  User namespace to use
      --uts string                     UTS namespace to use
  -v, --volume list                    Bind mount a volume
      --volume-driver string           Optional volume driver for the container
      --volumes-from list              Mount volumes from the specified container(s)
  -w, --workdir string                 Working directory inside the container
  
4. $ docker build -t my-nodejs-app .
  
Sending build context to Docker daemon  17.92kB
Step 1/8 : FROM node:10-alpine
10-alpine: Pulling from library/node
cd784148e348: Pull complete
6f52a88bc2b7: Pull complete
8aae45f12d39: Pull complete
Digest: sha256:4ad088670da3d48f0e3604a452e1aaeab565f46333f72cbf22272266c4446941
Status: Downloaded newer image for node:10-alpine
 ---> 01379e6790c7
 
Step 2/8 : RUN mkdir -p /src/app
 ---> Running in 0c545157c6c9
Removing intermediate container 0c545157c6c9
 ---> 6d66255e7418
 
Step 3/8 : WORKDIR /src/app
Removing intermediate container 90e4de51ced4
 ---> 53a85234addb
 
Step 4/8 : COPY package.json /src/app/package.json
 ---> 8d18c6866ba4
 
Step 5/8 : RUN npm install
 ---> Running in 5b584b116154
added 78 packages from 74 contributors and audited 143 packages in 3.641s
found 28 vulnerabilities (11 low, 12 moderate, 5 high)
  run `npm audit fix` to fix them, or `npm audit` for details
Removing intermediate container 5b584b116154
 ---> 0ea8b37e88ce
 
Step 6/8 : COPY . /src/app
 ---> 36612ea5db04
 
Step 7/8 : EXPOSE 3000
 ---> Running in b91b0bc4ac94
Removing intermediate container b91b0bc4ac94
 ---> 7e1eedfb9a89
 
Step 8/8 : CMD [ "npm", "start" ]
 ---> Running in 584aa2ab9608
Removing intermediate container 584aa2ab9608
 ---> d7833c58abb3
Successfully built d7833c58abb3
Successfully tagged my-nodejs-app:latest

5. $ docker run -d --name my-running-app -p 3000:3000 my-nodejs-app

325499f43c3844de4f00f2cd274437bf2a86d48cdb228b95d6573c768ba2d47f

6. $ curl http://docker:3000

<!DOCTYPE html><html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><h1>Express</h1><p>Welcome to Express</p></body></html>

7. $ docker run -d --name my-production-running-app -e NODE_ENV=production -p 3000:3000 my-nodejs-app

ac8d18b1bca07ade26f720876284a17dd3c1a7c0639eb117bfaeb1782f3aaf63

8. $  docker build --rm=false .

Sending build context to Docker daemon  17.92kB
Step 1/8 : FROM node:10-alpine
 ---> 01379e6790c7
Step 2/8 : RUN mkdir -p /src/app
 ---> Using cache
 ---> 6d66255e7418
Step 3/8 : WORKDIR /src/app
 ---> Using cache
 ---> 53a85234addb
Step 4/8 : COPY package.json /src/app/package.json
 ---> Using cache
 ---> 8d18c6866ba4
Step 5/8 : RUN npm install
 ---> Using cache
 ---> 0ea8b37e88ce
Step 6/8 : COPY . /src/app
 ---> Using cache
 ---> 36612ea5db04
Step 7/8 : EXPOSE 3000
 ---> Using cache
 ---> 7e1eedfb9a89
Step 8/8 : CMD [ "npm", "start" ]
 ---> Using cache
 ---> d7833c58abb3
Successfully built d7833c58abb3

9. $  docker run -a stdin -a stdout -i -t ubuntu /bin/bash

root@22a3d44efb8d:/#
root@22a3d44efb8d:/#

10. $  docker commit c3f279d17e0a  svendowideit/testimage:version3

Error response from daemon: No such container: c3f279d17e0a

11. $ docker images

REPOSITORY          TAG                 IMAGE ID            CREATED              SIZE

my-nodejs-app       latest              acbc62f1a0a9        About a minute ago   77MB

node                10-alpine           01379e6790c7        10 hours ago         70.7MB

ubuntu              latest              16508e5c265d        4 months ago         84.1MB

redis               latest              4e8db158f18d        4 months ago         83.4MB

weaveworks/scope    1.9.1               4b07159e407b        5 months ago         68MB

alpine              latest              11cd0b38bc3c        5 months ago         4.41MB

12. $  docker commit 1e4c92d1bc47  svendowideit/testimage:version

sha256:8bb79162d37a5b2c1f5af61557ac87238ef1c1927157dd9d5c061657bd573c3b

13. $ docker inspect -f "{{ .Config.Env }}"  1e4c92d1bc47

[NODE_ENV=production PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin NODE_VERSION=10.14.2 YARN_VERSION=1.12.3]

14. $ docker commit --change "ENV DEBUG true" 1e4c92d1bc47 

svendowideit/testimage:version3sha256:81b733c98103610391a731a49830d106fc0498b20f5572a34612e23651b39603

15. $  docker inspect -f "{{ .Config.Env }}"  sha256:81b733c98103610391a731a49830d106fc0498b20f5572a34612e23651b39603

[NODE_ENV=production PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin NODE_VERSION=10.14.2 YARN_VERSION=1.12.3 DEBUG=true]

16. $ docker commit --change='CMD ["apachectl", "-DFOREGROUND"]' -c "EXPOSE 80" 1e4c92d1bc47  svendowideit/testimage:version4

sha256:77a044fd4582b6b902282cc16cabc03fa228d2d698feb6cfecf24b09711d0b41

17. $ docker run -d svendowideit/testimage:version4

0f6091e7a37d54ac084ca96a11c4597daf73ca972e367e690b176dae26a2ad1e

docker: Error response from daemon: OCI runtime create failed: container_linux.go:348: starting container process caused "exec: \"apachectl\": executable file not found in $PATH": unknown.

18. $  docker build .

Sending build context to Docker daemon  17.92kB
Step 1/8 : FROM node:10-alpine
 ---> 01379e6790c7
Step 2/8 : RUN mkdir -p /src/app
 ---> Using cache
 ---> e81c2494f5f6
Step 3/8 : WORKDIR /src/app
 ---> Using cache
 ---> 4b241a1dca38
Step 4/8 : COPY package.json /src/app/package.json
 ---> Using cache
 ---> 2407e9d27126
Step 5/8 : RUN npm install
 ---> Using cache
 ---> 3cd88dddb53f
Step 6/8 : COPY . /src/app
 ---> Using cache
 ---> d387b7020ac5
Step 7/8 : EXPOSE 3000
 ---> Using cache
 ---> 1e9ede1f003f
Step 8/8 : CMD [ "npm", "start" ]
 ---> Using cache
 ---> acbc62f1a0a9
Successfully built acbc62f1a0a9

19. $ docker build -t vieux/apache:2.0 .

Sending build context to Docker daemon  17.92kB
Step 1/8 : FROM node:10-alpine
 ---> 01379e6790c7
Step 2/8 : RUN mkdir -p /src/app
 ---> Using cache
 ---> e81c2494f5f6
Step 3/8 : WORKDIR /src/app
 ---> Using cache
 ---> 4b241a1dca38
Step 4/8 : COPY package.json /src/app/package.json
 ---> Using cache
 ---> 2407e9d27126
Step 5/8 : RUN npm install
 ---> Using cache
 ---> 3cd88dddb53f
Step 6/8 : COPY . /src/app
 ---> Using cache
 ---> d387b7020ac5
Step 7/8 : EXPOSE 3000
 ---> Using cache
 ---> 1e9ede1f003f
Step 8/8 : CMD [ "npm", "start" ]
 ---> Using cache
 ---> acbc62f1a0a9
Successfully built acbc62f1a0a9
Successfully tagged vieux/apache:2.0

20. $ docker build -f Dockerfile.debug .

unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /home/scrapbook/tutorial/Dockerfile.debug: no such file or directory

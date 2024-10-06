# Micro-calculations

## How to launch

1. Install
   - [docker](https://docs.docker.com/get-docker/)
   - [kubectl](https://kubernetes.io/docs/tasks/tools/)
   - [minikube](https://minikube.sigs.k8s.io/docs/start/)
   - [istiocli](https://istio.io/latest/docs/ops/diagnostic-tools/istioctl/#install-hahahugoshortcode712s2hbhb)
2. Run:
   - [`setup-cluster.sh`](./setup-cluster.sh)
   - [`apply.sh`](./apply.sh)
   - ['run-tunnel.sh'](./run-tunnel.sh)
3. Add `127.0.0.1 micro-calculations.local` to your hosts file

### Build

Each service has its own Dockerfile and `build.sh` script. Root level [`build-services.sh`](./build-services.sh) script runs build scripts for each service.

### Dashboards

- MiniKube Dashboard - `run-dashboard.sh`
- Kiali Dashboard - `run-kiali-dashboard.sh`
- Prometheus Dashboard - `run-prometheus-dashboard.sh`
- Grafana Dashboard - `run-grafana-dashboard.sh`

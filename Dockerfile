FROM fedora:latest

EXPOSE 3000

WORKDIR /opt/cloud/

COPY . .

RUN dnf update -y \
    && dnf install -y curl \
    && curl -o /opt/cloud/apps/server "https://cloud.appwrite.io/v1/storage/buckets/65533df09d9a3d5563d3/files/656d1c9962039c2b637a/download?project=655197cf1417c3d0178c" \
    && chmod +x /opt/cloud/apps/server

CMD ["/opt/cloud/apps/server"]

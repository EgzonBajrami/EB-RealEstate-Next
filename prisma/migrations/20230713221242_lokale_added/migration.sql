-- CreateTable
CREATE TABLE "Lokale" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "space" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,
    "images" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Lokale_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Apartments" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "rooms" TEXT NOT NULL,
    "bathroom" TEXT NOT NULL,
    "space" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "latitude" TEXT,
    "longitude" TEXT,
    "images" TEXT[],

    CONSTRAINT "Apartments_pkey" PRIMARY KEY ("id")
);

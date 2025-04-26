import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  picture: { type: String, required: true },
  pictureTwo: { type: String, required: true },
  pictureThree: { type: String, required: true },
  price: { type: Number, required: true },
  condition: { type: String, required: true },
  type: { type: String, required: true },
  quantity: { type: Number, required: true },

  memorySize: { type: String, required: true },
  shadingUnits: { type: String, required: true },
  ports: { type: String, required: true },
  engineClock: { type: String, required: true },

  gpuName: { type: String, required: true },
  gpuVariant: { type: String, required: true },
  architecture: { type: String, required: true },
  foundry: { type: String, required: true },
  processSize: { type: String, required: true },
  transistors: { type: String, required: true },
  density: { type: String, required: true },
  dieSize: { type: String, required: true },
  chipPackage: { type: String, required: true },
  baseClock: { type: String, required: true },
  boostClock: { type: String, required: true },
  memoryClock: { type: String, required: true },
  memoryType: { type: String, required: true },
  memoryBus: { type: String, required: true },
  bandwidth: { type: String, required: true },
  shaderModel: { type: String, required: true },
  tmus: { type: String, required: true },
  rops: { type: String, required: true },
  computeUnits: { type: String, required: true },
  l1Cache: { type: String, required: true },
  l2Cache: { type: String, required: true },
  directX: { type: String, required: true },
  openGL: { type: String, required: true },
  openCL: { type: String, required: true },
  vulkan: { type: String, required: true },
  SuggestedPsu: { type: String, required: true }
});

export default mongoose.model("Products", productSchema);

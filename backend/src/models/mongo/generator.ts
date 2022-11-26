import mongoose from "mongoose";

interface GeneratorAttrs {
  name: string;
  urlResepsi: string;
  urlUnduh: string;
  urlResepsiUnduh: string;
  copiedResepsi: boolean;
  copiedUnduh: boolean;
  copiedResepsiUnduh: boolean;
}

interface GeneratorDoc extends mongoose.Document {
  name: string;
  urlResepsi: string;
  urlUnduh: string;
  urlResepsiUnduh: string;
  copiedResepsi: boolean;
  copiedUnduh: boolean;
  copiedResepsiUnduh: boolean;
}

interface GeneratorModel extends mongoose.Model<GeneratorDoc> {
  build(attrs: GeneratorAttrs): GeneratorDoc;
}

const generatorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    urlResepsi: {
      type: String,
      required: true,
    },
    urlUnduh: {
      type: String,
      required: true,
    },
    urlResepsiUnduh: {
      type: String,
      required: true,
    },
    copiedResepsi: {
      type: Boolean,
      default: false,
    },
    copiedUnduh: {
      type: Boolean,
      default: false,
    },
    copiedResepsiUnduh: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt",
    },
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
      },
    },
  }
);

generatorSchema.statics.build = (attrs: GeneratorAttrs) => {
  return new Generator(attrs);
};

const Generator = mongoose.model<GeneratorDoc, GeneratorModel>(
  "generator",
  generatorSchema
);

export default Generator;

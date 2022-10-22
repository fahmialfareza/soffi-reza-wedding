import mongoose from "mongoose";

interface GeneratorAttrs {
  name: string;
  url: string;
}

interface GeneratorDoc extends mongoose.Document {
  name: string;
  url: string;
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
    url: {
      type: String,
      required: true,
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

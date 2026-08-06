import { z } from "zod";
const apiResponseSchema = (dataSchema) => z.object({
  data: dataSchema,
  meta: z.object({
    page: z.number().optional(),
    limit: z.number().optional(),
    total: z.number().optional(),
    hasMore: z.boolean().optional()
  }).optional(),
  errors: z.array(
    z.object({
      field: z.string().optional(),
      message: z.string()
    })
  ).optional()
});
export {
  apiResponseSchema
};

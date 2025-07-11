import type { FastifyPluginCallbackZod } from "fastify-type-provider-zod";
import { z } from "zod/v4";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schema/index.ts";

export const uploadAudioRoute: FastifyPluginCallbackZod = (app) => {
  app.post(
    "/rooms/:roomId/audio",
    {
      schema: {
        params: z.object({
          roomId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params;
      const audio = await request.file();

      if (!audio) {
        throw new Error("Audio is required");
      }

      const audioBuffer = await audio.toBuffer();

      const audioAsBase64 = audioBuffer.toString("base64");

      const transcription = await transcribeAudio(audioAsBase64, audio.mimetype);

      return { transcription };

      // 1.Transcrever o audio
      ///2. Gerar o valor semantico
    }
  );
};
function transcribeAudio(audioAsBase64: string, mimetype: string) {
  throw new Error("Function not implemented.");
}

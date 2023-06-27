import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0x03baE527757b793D4533706A3718895d451b1BB5", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Rare Naruto",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/rare_naruto.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
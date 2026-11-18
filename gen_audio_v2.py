import asyncio
import edge_tts
import os

base_dir = r"D:\japanese-moving-video"
audio_dir = os.path.join(base_dir, "public")
os.makedirs(audio_dir, exist_ok=True)

scripts = [
    "搬家还在自己打包到凌晨？一套日式搬家，让你全程不用动手。",
    "家具拆装、易碎品打包、家具进场归位，这些又累又怕搞砸的活儿，本来就该交给专业的。",
    "我们上门带全套打包材料，衣物直接挂进衣柜箱，厨房餐具逐件包好，从旧家打包到新家归位，一条龙搞定。",
    "不外包、不临时工，自己的师傅全程负责，精细、干净、守时，搬迁当天你只管验收。",
    "搬家这件事，交给专业的人。关注我，让搬家变成一件省心的事。",
]

VOICE = "zh-CN-XiaoxiaoNeural"

async def generate_audio(index, text):
    output_file = os.path.join(audio_dir, f"scene{index+1}_audio.mp3")
    communicate = edge_tts.Communicate(text, VOICE)
    await communicate.save(output_file)
    print(f"OK scene{index+1}_audio.mp3")

async def main():
    for i, text in enumerate(scripts):
        await generate_audio(i, text)

if __name__ == "__main__":
    asyncio.run(main())

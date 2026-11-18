import os
from mutagen.mp3 import MP3

PUBLIC_DIR = r"D:\japanese-moving-video\public"
FPS = 30

print("=== 场景时长测量 ===")
total_sec = 0.0
frames_list = []
for i in range(1, 10):
    f = os.path.join(PUBLIC_DIR, f"scene{i}_audio.mp3")
    if not os.path.exists(f):
        break
    sec = MP3(f).info.length
    frames = int((sec + 0.4) * FPS)
    frames_list.append(frames)
    total_sec += sec
    print(f"Scene {i}: 音频 {sec:.2f}s -> 配置 {frames} 帧 ({frames/FPS:.2f}s)")

total_frames = sum(frames_list)
print(f"\n总语音时长: {total_sec:.2f}s")
print(f"总视频: {total_frames} 帧 ({total_frames/FPS:.2f}s)")
print(f"\ndurationInFrames={total_frames}")
print("Sequence from/duration:")
pos = 0
for i, fr in enumerate(frames_list):
    print(f"  Scene{i+1}: from={pos} durationInFrames={fr}")
    pos += fr

<img src="https://user-images.githubusercontent.com/62586450/105334552-f9cb9400-5c11-11eb-82c7-c2afdcebb0ed.png" width="128" height="128">

# danXup - NofallTech

danXup is a working prototype for the technology part of NofallTech. This project leads to shortlisted 15 teams in [Hong Kong Techathon 2021](https://www.hongkongtechathon2021.com) of the theme "Social Impact & Health Tech".

NofallTech focuses on fall prevention especially for 50-65+. The idea of fall prevention is to form a dance group for them. Within the dancing session, we can analyze their postures/ motions to identify their problems.

Therefore, we can provide rhythmic movements according to the research from Otago University, with the help of a dance choreographer and physiotherapist to reduce to risk of falling.

This project is focusing on the platform/ application of the dancing service and motion tracking.

<img src="https://user-images.githubusercontent.com/62586450/105336115-d0ac0300-5c13-11eb-95e9-e83f7fcb01bd.jpg" width="400" height="400">

## Pose Animator

For the motion tracking feature, I used [Pose Animator](https://github.com/yemount/pose-animator) for the simulation.

Pose Animator takes a 2D vector illustration and animates its containing curves in real-time based on the recognition result from PoseNet and FaceMesh. It borrows the idea of skeleton-based animation from computer graphics and applies it to vector characters.

For more information, please check out [his repo](https://github.com/yemount/pose-animator).

## Build And Run

Install dependencies and prepare the build directory:

```sh
yarn
```

To watch files for changes, and launch a dev server:

```sh
yarn watch
```

## Attention

This web prototype is customized for my personal webcam, which is in portait mode. Therefore, the width and height of the video might looks shrinked from your webcam. Change the setting to fix this.

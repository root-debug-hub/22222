import {WorldImpl} from "../common/world.js";
import {Animate} from "./components/com_animate.js";
import {AudioSource} from "./components/com_audio_source.js";
import {Camera} from "./components/com_camera.js";
import {Children} from "./components/com_children.js";
import {Collide} from "./components/com_collide.js";
import {ControlAlways} from "./components/com_control_always.js";
import {ControlSpawn} from "./components/com_control_spawn.js";
import {Draw} from "./components/com_draw.js";
import {Lifespan} from "./components/com_lifespan.js";
import {Light} from "./components/com_light.js";
import {Mimic} from "./components/com_mimic.js";
import {Move} from "./components/com_move.js";
import {Named} from "./components/com_named.js";
import {RigidBody} from "./components/com_rigid_body.js";
import {Shake} from "./components/com_shake.js";
import {Task} from "./components/com_task.js";
import {Toggle} from "./components/com_toggle.js";
import {Transform} from "./components/com_transform.js";
import {Transform2D} from "./components/com_transform2d.js";
import {Trigger} from "./components/com_trigger.js";

const enum Component {
    Animate,
    AudioListener,
    AudioSource,
    Camera,
    Children,
    Collide,
    ControlAlways,
    ControlSpawn,
    Draw,
    Lifespan,
    Light,
    Mimic,
    Move,
    Named,
    Render,
    RigidBody,
    Shake,
    Task,
    Toggle,
    Transform,
    Transform2D,
    Trigger,
}

export const enum Has {
    None = 0,
    Animate = 1 << Component.Animate,
    AudioListener = 1 << Component.AudioListener,
    AudioSource = 1 << Component.AudioSource,
    Camera = 1 << Component.Camera,
    Children = 1 << Component.Children,
    Collide = 1 << Component.Collide,
    ControlAlways = 1 << Component.ControlAlways,
    ControlSpawn = 1 << Component.ControlSpawn,
    Draw = 1 << Component.Draw,
    Lifespan = 1 << Component.Lifespan,
    Light = 1 << Component.Light,
    Mimic = 1 << Component.Mimic,
    Move = 1 << Component.Move,
    Named = 1 << Component.Named,
    Render = 1 << Component.Render,
    RigidBody = 1 << Component.RigidBody,
    Shake = 1 << Component.Shake,
    Task = 1 << Component.Task,
    Toggle = 1 << Component.Toggle,
    Transform = 1 << Component.Transform,
    Transform2D = 1 << Component.Transform2D,
    Trigger = 1 << Component.Trigger,
}

export interface World extends WorldImpl {
    Animate: Array<Animate>;
    AudioSource: Array<AudioSource>;
    Camera: Array<Camera>;
    Children: Array<Children>;
    Collide: Array<Collide>;
    ControlAlways: Array<ControlAlways>;
    ControlSpawn: Array<ControlSpawn>;
    Draw: Array<Draw>;
    Lifespan: Array<Lifespan>;
    Light: Array<Light>;
    Mimic: Array<Mimic>;
    Move: Array<Move>;
    Named: Array<Named>;
    // Render depends on the version of WebGL. See com_render*, sys_render*.
    RigidBody: Array<RigidBody>;
    Shake: Array<Shake>;
    Task: Array<Task>;
    Toggle: Array<Toggle>;
    Transform: Array<Transform>;
    Transform2D: Array<Transform2D>;
    Trigger: Array<Trigger>;
}

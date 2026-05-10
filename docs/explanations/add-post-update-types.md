## How `js/app/x_aa-add-post.js` builds 4 Update types (Map, Swiper, Flyer, Video)

In the Add Post flow, `x_aa-add-post.js` is the main controller for choosing update type, rendering preview/config UI, and saving.  
It delegates most rendering logic to `js/app/x_all.js` and uses external libraries.

---

### 1) Type selection entry point

`doPTypeTip()` exposes 4 choices:

- **Map** → `pmap`
- **Swiper** → `pcarousel`
- **Flyer** → `pimage`
- **Video** → `pvideo`

These are bound to `p_ptype` and trigger type-specific preview/config behavior.

---

### 2) Shared functions from `x_all.js`

`x_aa-add-post.js` calls shared render/translate functions:

- `JSSHOP.ads.trnsltMapPstObj()` (Map)
- `JSSHOP.ads.trnsltSwiperObj()` (Swiper)
- `JSSHOP.ads.trnsltImgPstObj()` (Flyer)
- `JSSHOP.ads.trnsltVideoPstObj()` (Video)
- `JSSHOP.ads.getUpdatePVrs(type)` (serialize settings/data for save)

So `x_aa-add-post.js` orchestrates the flow; `x_all.js` performs most transformation/render logic.

---

### 3) Per-type flow

#### Map (`pmap`)
- Uses inline tabs: Preview / Markers / Settings.
- Collects map config fields (type, effect, fly speed, autoplay, capture options).
- `trnsltMapPstObj()` builds marker/map payload.
- `doNuGenMap()` renders with Leaflet.

#### Swiper (`pcarousel`)
- Uses Preview + Settings tabs.
- Collects swiper settings (content source, pagination, nav, loop, effect).
- `trnsltSwiperObj()` builds slide content and text.
- `loadNuSwiperObj()` / `loadSwiperObj()` initializes Swiper.

#### Flyer (`pimage`)
- Uses TinyMCE demo editor for flyer composition.
- `trnsltImgPstObj()` builds flyer HTML from selected data.
- On save, flyer HTML + selection metadata are compressed into `p_vars`.

#### Video (`pvideo`)
- `doVideoDiv()` renders video UI tabs (images/audio/video).
- Lazy-loads `CCapture_mod.js` when needed.
- Save flow calls `doCreateVid()`, then creates video automatically or with selected audio (`createVideoWithAudioStandalone`).

---

### 4) Libraries involved

- **Leaflet**: map rendering (`L.map`, markers, tile layers), canvas-preferred options.
- **Swiper**: carousel rendering (`new Swiper(...)`).
- **TinyMCE** for Flyer editing, including added plugins:
  - `mediapop`
  - `bgcolorpicker`
  - `textshadow`
  - `flyerlayout`
  - `flyersmodal`
- **CCapture** (`CCapture_mod.js`): video frame capture/render.
- **snapdom / html2canvas**: DOM-to-canvas fallback for preview image capture.

---

### 5) Save pipeline summary

`doPostAdd()` switches by `p_ptype`:

- **Flyer / Swiper / Map**: capture preview canvas (snapdom/html2canvas fallback) → upload (`savePstCanvasImg`) → save post.
- **Video**: call `doCreateVid()` (CCapture-driven flow), then finalize post/video output.
- Type-specific config is serialized via `getUpdatePVrs()` into `p_vars` so updates can be replayed/rendered later.

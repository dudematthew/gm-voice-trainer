<script setup>
    import {
			reactive,
        ref
    } from "vue";

    // Laban effort, space, texture, age, sex, race, profession, size, tempo, volume, tone, accent, problem
    const voiceModifiers = reactive([
        {
            id: "laban_effort",
            name: "Wysiłki Labana",
            description: "Wysiłki Labana to zestaw trzech parametrów, które opisują sposób wykonywania ruchu. Są to: czas, przestrzeń i siła. Każdy z tych parametrów może być zdefiniowany jako dynamiczny lub statyczny. W ten sposób powstaje 8 możliwych kombinacji, które określają sposób wykonywania ruchu. Wysiłki Labana są często wykorzystywane w pracy z aktorem, tancerzem, wokalistą, a także w pracy z osobami, które mają problemy z komunikacją werbalną.",
            icon: "co-voice-over-record",
            checked: true,
        },
        {
            id: "age",
            name: "Wiek",
            description: "Age of the speaker.",
            icon: "ri-mental-health-line",
            checked: true,
        },
        {
            id: "sex",
            name: "Płeć",
            description: "Sex of the speaker.",
            icon: "la-transgender-solid",
            checked: true,
        },
        {
            id: "race",
            name: "Rasa",
            description: "Race of the speaker.",
            icon: "gi-dwarf-face",
            checked: true,
        },
        {
            id: "profession",
            name: "Profesja",
            description: "Profession of the speaker.",
            icon: "md-workoutline-outlined",
            checked: true,
        },
        {
            id: "space",
            name: "Przestrzeń",
            description: "Opisuje sposób, w jaki dźwięk wypełnia przestrzeń. Może być zdefiniowany jako bliski, odległy, przestrzenny, zamknięty, otwarty itp.",
            icon: "bi-person-workspace",
            checked: false,
        },
        {
            id: "texture",
            name: "Tekstura",
            description: "Opisuje jakość dźwięku, czy jest gładki, chropowaty, jednolity, zmienny itp.",
            icon: "md-texture",
            checked: false,
        },
        {
            id: "size",
            name: "Wielkość",
            description: "Size of the speaker.",
            icon: "co-resize-both",
            checked: false,
        },
        {
            id: "tempo",
            name: "Tempo",
            description: "Tempo of the speech.",
            icon: "gi-temporary-shield",
            checked: false,
        },
        {
            id: "volume",
            name: "Głośność",
            description: "Volume of the speech.",
            icon: "bi-volume-up",
            checked: false,
        },
        {
            id: "tone",
            name: "Ton",
            description: "Tone of the speech.",
            icon: "gi-sound-waves",
            checked: false,
        },
        {
            id: "accent",
            name: "Akcent",
            description: "Accent of the speaker.",
            icon: "co-speech",
            checked: false,
        },
        {
            id: "problem",
            name: "Problem",
            description: "Problem areas identified in the speaker's voice.",
            icon: "md-reportproblem-outlined",
            checked: false,
        },
    ]);

</script>

<template>
    <main class="flex flex-col w-[100%] items-center">
        <div class="bg-dark-500 mt-[200px] w-10/12 flex flex-row rounded-md">
            <div class="w-6/12 p-12">
                <h1 class="text-3xl py-2 font-bold text-accent-400">Porozmawiajmy!</h1>
                <h2 class="text-lg py-1">Jak wiele różnych postaci jesteś w stanie odegrać jako Mistrz Gry? Sprawdź się!</h2>

                <ul class="flex flex-row flex-wrap my-2 py-2 gap-2">
                    <li class="flex flex-row flex-wrap rounded-md px-3 py-2 transition-all bg-dark-300 cursor-pointer" :class="voiceModifier.checked ? 'bg-primary-500' : 'hover:bg-primary-400'" v-for="voiceModifier in voiceModifiers" :key="voiceModifier.id" @click="voiceModifier.checked = !voiceModifier.checked">
                        <div class="inline-flex items-center">
                            <label class="relative flex cursor-pointer items-center rounded-full mr-2" :for="'checkbox-' + voiceModifier.id"
                                data-ripple-dark="true">
                                <input type="checkbox" :id="'checkbox-' + voiceModifier.id"
                                    class="before:content[''] peer relative h-6 w-6 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-accent-400 checked:bg-accent-400 checked:before:bg-accent-400 hover:before:opacity-10"
                                    v-model="voiceModifier.checked"/>
                                <div class="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-dark-800 opacity-0 transition-opacity peer-checked:opacity-100">
                                    <v-icon :name="voiceModifier.icon" class="p-0.2"></v-icon>
                                </div>
                            </label>
                            <span>{{ voiceModifier.name }}</span>
                        </div>
                    </li>
                </ul>

                <div class="flex flex-row justify-end w-full">
                    <button class="bg-dark-300 p-3 mx-2 rounded-md">Ustawienia</button>
                    <button class="bg-primary-500 p-3 mx-2 rounded-md">Generuj NPC</button>
                </div>
            </div>
            <div class="w-6/12 p-12">
                Prawy div
            </div>
        </div>
    </main>
</template>
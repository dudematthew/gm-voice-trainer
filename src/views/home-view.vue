<script setup>
    import {
			reactive,
        ref
    } from "vue";

    const showNpc = ref(true); // todo: change to false

    // Laban effort, space, texture, age, sex, race, profession, size, tempo, volume, tone, accent, problem
    const voiceModifiers = reactive([
        {
            id: "laban_effort",
            name: "Wysiłki Labana",
            description: "Wysiłki Labana to zestaw trzech parametrów, które opisują sposób wykonywania ruchu. Są to: czas, przestrzeń i siła. Każdy z tych parametrów może być zdefiniowany jako dynamiczny lub statyczny. W ten sposób powstaje 8 możliwych kombinacji, które określają sposób wykonywania ruchu. Wysiłki Labana są często wykorzystywane w pracy z aktorem, tancerzem, wokalistą, a także w pracy z osobami, które mają problemy z komunikacją werbalną.",
            icon: "co-voice-over-record",
            checked: true,
            special: 'laban_effort',
            data: null,
        },
        {
            id: "age",
            name: "Wiek",
            description: "Age of the speaker.",
            icon: "ri-mental-health-line",
            checked: true,
            special: false,
            data: [
                'Dziecko',
                'Młodzieniec',
                'Dorosły',
                'Starszy',
                'Starzec',
            ],
        },
        {
            id: "sex",
            name: "Płeć",
            description: "Sex of the speaker.",
            icon: "la-transgender-solid",
            checked: true,
            special: false,
            data: [
                'Mężczyzna',
                'Kobieta',
            ],
        },
        {
            id: "race",
            name: "Rasa",
            description: "Race of the speaker.",
            icon: "gi-dwarf-face",
            checked: true,
            special: false,
            data: [
                'Człowiek',
                'Elf',
                'Krasnolud',
                'Niziołek',
                'Gnom',
                'Półelf',
                'Półork',
                'Goblin',
                'Hobgoblin',
                'Ork',
                'Tabaxi',
                'Goliath',
                'Lizardfolk',
                'Tortle',
            ],
        },
        {
            id: "profession",
            name: "Profesja",
            description: "Profession of the speaker.",
            icon: "md-workoutline-outlined",
            checked: true,
            special: false,
            data: [
                'Aktor',
                'Artysta',
                'Bibliotekarz',
                'Budowniczy',
                'Cieśla',
                'Cyrkowiec',
                'Doktor',
                'Duchowny',
                'Górnik',
                'Grabarz',
                'Handlarz',
                'Karczmarz',
                'Kowal',
                'Kupiec',
                'Łowca',
                'Malarz',
                'Mieszczanin',
                'Myśliwy',
                'Najemnik',
                'Niewolnik',
                'Nocny Łowca',
                'Ochotnik',
                'Ogr',
                'Oprych',
                'Pasterz',
                'Pijak',
                'Pirat',
                'Płatny morderca',
                'Podróżnik',
                'Pomocnik',
                'Rzeźnik',
                'Rzemieślnik',
                'Rzecznik',
                'Rzemieślnik',
                'Sędzia',
                'Sługa',
                'Strażnik',
                'Strażnik więzienny',
            ]
        },
        {
            id: "space",
            name: "Położenie",
            description: "Określa na jakiej wysokości znajduje się głos w gardle.",
            icon: "bi-person-workspace",
            checked: false,
            special: false,
            data: [
                {
                    name: 'Normalne',
                    description: 'Normalne położenie głosu.',
                    audio: null,
                },
                {
                    name: 'Nosowe',
                    description: 'Położenie głosu w nosie.',
                    audio: null,
                },
                {
                    name: 'Gardłowe',
                    description: 'Położenie głosu w gardle.',
                    audio: null,
                }
            ],
        },
        {
            id: "texture",
            name: "Tekstura",
            description: "Opisuje jakość dźwięku, czy jest gładki, chropowaty, jednolity, zmienny itp.",
            icon: "md-texture",
            checked: false,
            special: false,
            data: [
                {
                    name: 'Sucha',
                    description: 'Tekstura głosu jest sucha.',
                    audio: null,
                },
                {
                    name: 'Oddychająca',
                    description: 'Tekstura głosu jest oddychająca.',
                    audio: null,
                }
            ],
        },
        {
            id: "size",
            name: "Wielkość",
            description: "Określa jak wielka jest postać mówiąca.",
            icon: "co-resize-both",
            checked: false,
            special: false,
            data: [
                'Mały',
                'Średni',
                'Wielki',
            ],
        },
        {
            id: "tempo",
            name: "Tempo",
            description: "Tempo mowy.",
            icon: "gi-temporary-shield",
            checked: false,
            special: false,
            data: [
                {
                    name: 'Szybkie',
                    description: 'Tempo mowy jest szybkie.',
                    audio: null,
                },
                {
                    name: 'Powolne',
                    description: 'Tempo mowy jest wolne.',
                    audio: null,
                },
                {
                    name: 'Normalne',
                    description: 'Tempo mowy jest normalne.',
                    audio: null,
                }
            ],
        },
        {
            id: "volume",
            name: "Głośność",
            description: "Określa jak głośno mówi postać.",
            icon: "bi-volume-up",
            checked: false,
            special: false,
            data: [
                'Średnia',
                'Cicha',
                'Głośna',
            ]
        },
        {
            id: "tone",
            name: "Ton",
            description: "Określa postawę mówiącego, czy jest to ton neutralny, wesoły, smutny itp.",
            icon: "gi-sound-waves",
            checked: false,
            special: false,
            data: [
                {
                    name: 'Neutralny',
                    description: 'Ton mowy jest neutralny.',
                    audio: null,
                },
                {
                    name: 'Wesoły',
                    description: 'Ton mowy jest wesoły.',
                    audio: null,
                },
                {
                    name: 'Smutny',
                    description: 'Ton mowy jest smutny.',
                    audio: null,
                },
                {
                    name: 'Zły',
                    description: 'Ton mowy jest zły.',
                    audio: null,
                },
                {
                    name: 'Zaskoczony',
                    description: 'Ton mowy jest zaskoczony.',
                    audio: null,
                },
                {
                    name: 'Zaniepokojony',
                    description: 'Ton mowy jest zaniepokojony.',
                    audio: null,
                },
                {
                    name: 'Zadowolony',
                    description: 'Ton mowy jest zadowolony.',
                    audio: null,
                },
                {
                    name: 'Zmęczony',
                    description: 'Ton mowy jest zmęczony.',
                    audio: null,
                },
                {
                    name: 'Znudzony',
                    description: 'Ton mowy jest znudzony.',
                    audio: null,
                },
                {
                    name: 'Zwariowany',
                    description: 'Ton mowy jest zwariowany.',
                    audio: null,
                },
            ],
        },
        {
            id: "accent",
            name: "Akcent",
            description: "Określa akcent mówiącego, czy posiada np. akcent szkocki, angielski itp.",
            icon: "co-speech",
            checked: false,
            special: false,
            data: [
                'Tak',
                'Nie',
            ]
        },
        {
            id: "problem",
            name: "Problem",
            description: "Określa czy postać ma jakiś problem, np. z mową, słuchem itp.",
            icon: "md-reportproblem-outlined",
            checked: false,
            special: false,
            data: [
                {
                    name: 'Seplenienie',
                    description: 'Postać ma problem z seplenieniem.',
                    audio: null,
                },
                {
                    name: 'Jąkanie',
                    description: 'Postać ma problem z jąkaniem.',
                    audio: null,
                },
                {
                    name: 'Reranie',
                    description: 'Postać ma problem z reraniem.',
                    audio: null,
                },
                {
                    name: 'Brak',
                    description: 'Postać nie ma żadnego problemu.',
                    audio: null,
                }
            ]
        },
    ]);

    const generatedNpc = reactive([]);

    /**
     * Generate NPC data based on selected voice modifiers.
     * If voice modifier is special, then generate alternative data.
     * @param {Object[]} selectedVoiceModifiers 
     */
    // const generateNpcData = (selectedVoiceModifiers) => {
    //     const npcData = [];

    //     for (const voiceModifier of selectedVoiceModifiers) {
    //         if (voiceModifier.special === 'laban_effort') {
    //             npcData.push(generateLabanEffort());
    //         } else {
    //             npcData.push(generateVoiceModifier(voiceModifier));
    //         }
    //     }

    //     return npcData;
    // };

    const generateNpc = () => {
        console.log(voiceModifiers);

        const selectedVoiceModifiers = voiceModifiers.filter(voiceModifier => voiceModifier.checked);

        if (selectedVoiceModifiers.length === 0) {
            alert("Wybierz przynajmniej jeden modulator głosu!");
            return;
        }

        // generatedNpc.values = generateNpcData(selectedVoiceModifiers);

        showNpc.value = true;
    };

</script>

<template>
    <main class="flex flex-col w-[100%] items-center transition-width">
        <div class="bg-dark-500 mt-[100px] w-auto flex flex-row rounded-md">
            <div class="p-12 max-w-xl">
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
                        <button class="bg-dark-300 p-3 mx-2 rounded-md" disabled>Ustawienia</button>
                        <button class="bg-primary-500 p-3 mx-2 rounded-md" @click="generateNpc()">Generuj NPC</button>
                    </div>
                </div>
                <div class="max-w-xl p-12" v-if="showNpc">
                    <h1 class="text-3xl py-2 font-bold text-primary-400">Odegraj!</h1>
                    <h2 class="text-lg py-1">Na podstawie poniższych informacji odegraj podaną postać.</h2>
                </div>
            </div>
    </main>
</template>
export const FetchData = async (selectedPerson) => {
  try {
    if (selectedPerson) {
      const urls = [
        { name: "films", urls: selectedPerson?.films || [] },
        { name: "starships", urls: selectedPerson?.starships || [] },
        { name: "vehicles", urls: selectedPerson?.vehicles || [] },
        { name: "characters", urls: selectedPerson?.characters || [] },
        { name: "species", urls: selectedPerson?.species || [] },
        { name: "planets", urls: selectedPerson?.planets || [] },
        { name: "pilots", urls: selectedPerson?.pilots || [] },
      ];

      const requests = [];
      const responses = [];

      urls.forEach(({ name, urls }) => {
        const requestsArray = urls.map((url) => fetch(url));
        requests.push(requestsArray);
      });

      for (let i = 0; i < urls.length; i++) {
        const data = await Promise.all(requests[i]);
        responses.push(data);
      }

      const filmsData = await Promise.all(
        responses[0].map((res) => res.json())
      );
      const shipData = await Promise.all(responses[1].map((res) => res.json()));
      const vehiclesData = await Promise.all(
        responses[2].map((res) => res.json())
      );
      const CharactersData = await Promise.all(
        responses[3].map((res) => res.json())
      );
      const speciesData = await Promise.all(
        responses[4].map((res) => res.json())
      );
      const planetsData = await Promise.all(
        responses[5].map((res) => res.json())
      );
      const pilotsData = await Promise.all(
        responses[6].map((res) => res.json())
      );

      return {
        filmsData,
        shipData,
        vehiclesData,
        CharactersData,
        speciesData,
        planetsData,
        pilotsData,
      };
    }
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

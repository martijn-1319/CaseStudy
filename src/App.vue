<template>
  <v-app>
    <v-main>
      <v-container>
        <Title>Overzicht van je rewards</Title>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus.

        <v-row>
          <v-col :sm="12" style="max-width: 285px">
            <FeaturedCard>
              <FeaturedCardTop>
                <div>Lorem ipsum dolor</div>
                <FeaturedCardStat>32</FeaturedCardStat>
              </FeaturedCardTop>
              <v-card-text>
                Behaalde punten
                <Badge />
              </v-card-text>
            </FeaturedCard>
          </v-col>
          <v-col :cols="12" md="auto grow">
            <v-card> content </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
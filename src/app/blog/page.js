import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6">
      {/* Header with Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-500 text-white p-4 z-10">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Title on the left */}
          <div className="text-xl font-bold">
          Maikho Amante
          </div>

          {/* Navbar */}
          <nav className="flex space-x-4">
            <Link href="/" className="text-lg hover:text-red-500">
              Home
            </Link>
            <Link href="/about" className="text-lg hover:text-red-500">
              About
            </Link>
            <Link href="/contact" className="text-lg hover:text-red-500">
              Contacts
            </Link>
            <Link href="/blog" className="text-lg hover:text-red-500">
              Blogs
            </Link>

          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="mt-20 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to the Blogs</h1>

        <p className="text-lg text-center">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Vel ullamcorper aliquet venenatis scelerisque fermentum. Malesuada metus eros eget eros nascetur. Ut inceptos magnis nascetur platea taciti placerat. Etiam praesent aliquam quisque quisque faucibus phasellus. Proin arcu sociosqu est venenatis scelerisque diam. Interdum lectus amet pellentesque ultrices; fringilla consequat faucibus magna. Ornare faucibus lobortis felis; aenean odio natoque? Felis facilisi eros feugiat natoque ex magnis ut. Varius lectus egestas ultricies commodo, tempor etiam mi massa.

          Est mus sodales commodo aliquam donec. Tellus lectus libero platea mollis ullamcorper condimentum rhoncus commodo. Gravida finibus massa suspendisse habitant nec iaculis libero. Facilisis turpis hac parturient dolor nunc. Condimentum arcu non dapibus imperdiet auctor consectetur. Dis id dui amet elementum maximus augue quisque. Iaculis suscipit massa auctor maximus sociosqu. Nulla metus pulvinar dignissim nunc netus nisi libero justo. Consequat lorem fames non; eget augue sem.

          Urna dui vel, erat dui hac tempus dolor platea. Primis imperdiet nulla nullam mi porta posuere nulla porttitor etiam. Ut erat euismod lectus non rhoncus vitae pharetra. Integer fames quis luctus primis ante cras auctor. Senectus volutpat eu ornare, lorem imperdiet sed tortor eros dictumst. Senectus per fusce cursus litora montes vitae class in. Lacus praesent habitant dis sapien feugiat libero at. At dictum integer pharetra scelerisque suscipit gravida, nibh dapibus sed.

          Nullam urna molestie integer turpis dictumst ante eros lorem quam. Tincidunt ad turpis volutpat consectetur facilisi quisque auctor dapibus. Netus ultricies cursus, dapibus class nisi nibh? Nullam id sem quisque volutpat ligula. Morbi nunc penatibus in ipsum etiam tristique. Parturient enim proin gravida sodales semper hendrerit metus. Himenaeos mauris id eleifend neque dictumst? Efficitur fringilla leo lacus aliquet aptent cubilia eleifend pulvinar. Felis maecenas rhoncus est facilisis inceptos aliquet.

          Mus augue ridiculus nunc parturient fermentum mollis purus. Placerat dapibus fames ac ullamcorper cras eleifend. Duis blandit et maximus pharetra semper curabitur euismod. Semper viverra euismod dolor ligula porttitor lectus bibendum. Justo tellus fames eros convallis eget tempus maximus. Fermentum facilisi eu cursus litora maximus sollicitudin elit proin.

          Sapien potenti odio, senectus purus finibus metus. Finibus ac quam diam quam aenean penatibus ut. Faucibus dis tristique non viverra convallis aptent. Dis vel tortor ipsum accumsan sit pharetra scelerisque suscipit. Donec sodales ipsum sed aptent curabitur hac. Aliquet pellentesque duis sem; viverra aptent et.

          Etiam orci sem maecenas senectus, cursus euismod inceptos aliquet! Blandit a accumsan consequat viverra ex maecenas sit leo imperdiet. Vehicula pellentesque montes lectus porta diam malesuada; nisl dapibus placerat. Dictum vestibulum massa faucibus velit morbi sagittis aenean tempor. Fermentum ultrices imperdiet natoque mollis integer natoque. Posuere semper cursus tempus inceptos ad ultricies? Dapibus conubia magna eros taciti facilisi. Montes arcu sociosqu porta senectus et maximus sem. Penatibus magnis etiam sollicitudin tempus nascetur habitant. Nisl porta pretium pharetra curabitur cras condimentum.

          Venenatis erat tellus ornare molestie elementum magnis sollicitudin ut a. Dolor dignissim senectus quis rutrum venenatis felis. Maecenas fusce non at hendrerit odio posuere accumsan. Erat sit magna molestie hendrerit; ac molestie a nisl pellentesque. Elementum metus rutrum ut parturient interdum tincidunt dapibus dictum. Vitae imperdiet per cras suscipit orci. Massa euismod nibh laoreet ornare eros ligula molestie aenean feugiat.

          Malesuada ornare ornare fringilla lacus molestie netus interdum efficitur. Odio facilisi leo ullamcorper inceptos dapibus luctus. Ahendrerit malesuada turpis; mi non rutrum. Dis torquent curabitur leo ullamcorper praesent maximus class. Nascetur tempus class, dignissim pulvinar quis quis. Vel dictum facilisis nascetur consectetur malesuada aptent ridiculus ut parturient. Quis venenatis libero ultricies justo magna condimentum. Aliquet tempus sollicitudin ante; odio pretium eleifend aenean. Nulla mattis orci nulla; commodo fringilla mi fermentum. Morbi taciti molestie velit sociosqu accumsan curae vehicula sagittis.

          Velit cubilia facilisi congue nam sapien molestie. Dolor faucibus fames lectus in sit posuere? Volutpat curabitur natoque neque donec lectus velit nostra et. Sapien ante suscipit vitae scelerisque lorem. Tempor nam bibendum pellentesque ac ultricies. Arcu at lorem pretium rhoncus diam egestas ornare blandit. Rutrum hendrerit ligula ultrices tortor mi neque habitasse? Varius felis placerat neque porttitor inceptos convallis posuere.

          Magnis donec sociosqu congue facilisis vehicula euismod. Nisl quis suspendisse donec inceptos nisi sem. Tellus vehicula cubilia nulla nulla a potenti penatibus vitae. Condimentum praesent scelerisque molestie neque ut porta consequat volutpat. Nostra tempus felis primis aliquet, sodales netus. Magna facilisis sapien et donec porttitor curabitur bibendum. Sed ac est fermentum ac class tortor eget. Lorem parturient mauris sit sollicitudin faucibus habitant habitasse efficitur risus. Vel phasellus lobortis magna primis feugiat interdum dui ipsum. Convallis maecenas himenaeos dictum erat ex.

          Dolor commodo ridiculus ad varius quis risus vitae. Elit quis malesuada eu; hendrerit mus malesuada sed. Curae laoreet conubia ultricies consectetur nibh. Litora fusce cursus himenaeos; semper sagittis at viverra tellus imperdiet. Sociosqu mattis pulvinar efficitur morbi mollis lacinia metus porta. Velit mollis mattis vivamus conubia ex eleifend, quisque lorem. Condimentum vehicula vitae nulla eleifend velit placerat mollis adipiscing aenean! Inceptos dis cubilia imperdiet class ac vestibulum massa integer.

          Suspendisse suspendisse nulla proin, nullam venenatis facilisi eros tempor ullamcorper. Dui lacinia parturient aenean, vestibulum class vestibulum tempor nulla. Maximus inceptos venenatis cursus facilisi nullam convallis non? Ante semper sapien est nunc pellentesque egestas platea. Cras netus lectus risus orci facilisis congue. Lectus adipiscing habitant consectetur, volutpat etiam amet. Sit proin ligula inceptos accumsan vitae montes. Sodales mus odio primis sollicitudin elit blandit diam? Aenean purus fusce accumsan eros tortor. Aliquam tempor neque dui habitasse vehicula interdum.

          Non ultrices at ridiculus, est inceptos condimentum sapien. Viverra velit consectetur semper ornare sed ad. Maximus eu maecenas phasellus taciti laoreet platea augue. Sociosqu parturient suspendisse consequat imperdiet dui accumsan. Dapibus tempus nunc porta potenti efficitur eros nam dolor. Praesent efficitur accumsan etiam viverra habitasse torquent volutpat nulla. Lorem tortor et hendrerit, class lacus consequat consequat. Dolor magnis cubilia purus, augue litora lectus tellus. Scelerisque dignissim primis sem aenean tincidunt risus.

          Porttitor lectus lacinia morbi ullamcorper interdum sem dictum mattis tempor. Risus hac est ultrices platea tristique. Facilisi finibus dis class, pulvinar duis sit iaculis elit. Pellentesque himenaeos gravida arcu dui; nam enim. Felis vehicula potenti conubia a ligula posuere aliquam egestas faucibus. At suspendisse penatibus dictum iaculis nisi lacus.

          Ultrices nibh bibendum facilisis facilisi hendrerit dignissim. Porttitor vestibulum per habitasse maximus platea massa ullamcorper gravida. Facilisi fermentum mus id proin turpis hendrerit. Primis luctus dictum tellus pretium nibh, mollis suspendisse. Vitae vel elit congue potenti interdum tempor. Aenean tempus himenaeos metus, etiam platea iaculis nisl. Metus nisi nullam, consectetur curabitur scelerisque justo eget.

          Suspendisse montes sit ante eget et, ligula felis odio. Sed quis maximus hac massa nulla, nascetur mus. Diam aptent etiam sodales lacus pellentesque; vestibulum lacus lacus. Eleifend dictum inceptos sagittis ut potenti. Inceptos vulputate consequat taciti placerat phasellus purus. Molestie quis erat rutrum torquent pretium accumsan. Ante rutrum diam morbi euismod urna phasellus. Proin vel ornare tristique urna; felis litora augue pulvinar. Mus vehicula elit vulputate in augue.

          Posuere aenean magna ad, mollis erat ante aptent. Semper nam dictum pellentesque, praesent congue imperdiet. Egestas eleifend fusce per bibendum dignissim dignissim nisl. Nulla vestibulum lobortis sagittis hac netus placerat feugiat curabitur. Ullamcorper donec quisque enim rhoncus facilisi. Himenaeos interdum tempus habitasse nostra proin felis per nam ultricies. Tellus sodales fusce sociosqu fusce sapien. Libero convallis molestie eleifend torquent dignissim malesuada enim.

          Mattis nisi et duis tortor nunc. Malesuada tortor fusce dui fames adipiscing augue. Etiam ante turpis inceptos fames ipsum. Ad lacinia luctus porttitor himenaeos commodo nisl magna ligula. Ultrices porttitor tortor tincidunt aliquet inceptos arcu libero nec sagittis. Venenatis libero maximus malesuada pulvinar dis sapien ornare urna aliquet. Pulvinar dis morbi nunc aliquet magnis aptent luctus ad. Faucibus purus magnis ac netus fusce cras elit. Nullam massa velit augue at tristique vivamus rhoncus.

          Venenatis cursus dignissim pharetra dapibus duis ipsum et finibus bibendum. Sociosqu potenti vitae vulputate mattis libero torquent sapien. Mollis tempus volutpat phasellus nec senectus elit. Pretium ridiculus tempus nisi ligula lobortis consequat morbi. Feugiat suspendisse potenti a praesent lacinia ut mi. Ornare eros libero nec; et vel aptent turpis. Non convallis purus aenean sodales tellus nullam?
        </p>
      </div>

      {/* Footer */}
      <footer className="w-full bg-gray-500 text-white p-4 mt-12 text-center">
        <p>© 2025 Maikho Amante</p>
      </footer>
    </main>
  );
}
